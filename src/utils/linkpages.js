export const linkpages = (id, page) => {
  document.querySelector(id).addEventListener('click', () => {
    page();
  });
};