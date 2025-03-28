import React, { useRef, useEffect, MouseEvent, FC, ReactElement, forwardRef, Ref } from 'react';
import mergeRefs from 'react-merge-refs';
import hasParent from './has-parent';

interface ClickOutsideProps {
  active: boolean;
  onClick: (e?: MouseEvent) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>;
}

/**
 * Use forward ref to allow this component to be used with other components like
 * focus-trap-react, that rely on the same type of ref forwarding to direct children
 */
const ClickOutside: FC<ClickOutsideProps> = forwardRef(({ active = true, onClick, children }, forwardedRef) => {
  const innerRef = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const child = children ? (React.Children.only(children) as any) : undefined;

  if (!child || child.type === React.Fragment) {
    /**
     * React Fragments can't be used, as it would not be possible to pass the ref
     * created here to them.
     */
    throw new Error('A valid non Fragment React Children should be provided');
  }

  if (typeof onClick !== 'function') {
    throw new Error('onClick must be a valid function');
  }

  useEffect(() => {
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      document.addEventListener('mousedown', handleClick);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      document.addEventListener('touchstart', handleClick);
    }
    return () => {
      if (active) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        document.removeEventListener('mousedown', handleClick);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        document.removeEventListener('touchstart', handleClick);
      }
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    /**
     * Check if the clicked element is contained by the top level tag provided to the
     * ClickOutside component, if not, Outside clicked! Fire onClick cb
     */
    if (!hasParent(event.target, innerRef?.current)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      onClick(event);
    }
  };

  /**
   * Preserve the child ref prop if exists and merge it with the one used here and the
   * proxied by the forwardRef method
   */
  const composedRefCallback = (element: ReactElement) => {
    if (typeof child.ref === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      child.ref(element);
    } else if (child.ref) {
      child.ref.current = element;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return React.cloneElement(child, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ref: mergeRefs([composedRefCallback, innerRef, forwardedRef]),
  });
});

ClickOutside.displayName = 'ClickOutside';
export default ClickOutside;
