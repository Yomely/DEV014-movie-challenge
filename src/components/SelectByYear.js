const selectByYear = () => {
  const select = document.createElement('select');
  select.setAttribute('id', 'selectByYear');
  select.innerHTML = `
    <option value = "2020">2020</option>
    <option value = "2023">2023</option>
    <option value = "2024">2024</option>
    `;
  return select;
};

export default selectByYear;
