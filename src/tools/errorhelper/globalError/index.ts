export type JSErrorHelper = (error: Error, isFatal: boolean) => void;

const noop: JSErrorHelper = () => {};

export const setGlobalErrorHandler = (customHandler: JSErrorHelper = noop, allowedInDevMode = false) => {
  if (typeof allowedInDevMode != 'boolean' || typeof customHandler != 'function') {
    console.log(
      'setGlobalErrorHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean'
    );
    console.log('Not setting the JS handler .. please fix setGlobalErrorHandler call');
    return;
  }

  const allowed = allowedInDevMode ? true : !__DEV__;
  if (allowed) {
    // @ts-ignore
    global.ErrorUtils.setGlobalHandler(customHandler);
    const consoleError = console.error;
    // @ts-ignore
    console.error = (...args) => {
      // @ts-ignore
      global.ErrorUtils.reportError(...args);
      consoleError(...args);
    };
  } else {
    console.log('Skipping setGlobalErrorHandler: Reason: In DEV mode and allowedInDevMode = false');
  }
};

// @ts-ignore
export const getGlobalErrorHandler: () => JSErrorHelper = () =>
  // @ts-ignore
  global.ErrorUtils.getGlobalHandler();
