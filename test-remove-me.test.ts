describe('First test that should be removed', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

/**
 * Adding this empty export to avoid the
 * "cannot be compiled under '--isolatedModules' because it is considered a global script file.
 * Add an import, export, or an empty 'export {}' statement to make it a module.ts(1208)" error
 */
export {};
