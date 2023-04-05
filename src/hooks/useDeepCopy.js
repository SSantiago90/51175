function useDeepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

export default useDeepCopy;
