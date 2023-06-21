/* eslint-disable promise/param-names */
const usePromise = <T = unknown>() => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let resolve: (value?: T) => void = () => {};
  const P = new Promise((r) => {
    resolve = r;
  });
  return [resolve, P] as [(value?: T) => void, Promise<T>];
};
export default usePromise;
