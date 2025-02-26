// @ts-expect-error pdfjs references window.xxx, which fails if the jest testEnvironment is node
global.window ||= global;

// 20ms because that's what pdfjs used to do: https://github.com/mozilla/pdf.js/pull/9138/files
global.window.requestAnimationFrame = (cb) => global.window.setTimeout(cb, 20);
global.window.cancelAnimationFrame = (id) => global.window.clearTimeout(id);
