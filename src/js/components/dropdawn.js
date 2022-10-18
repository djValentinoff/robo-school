let tabsMenu = document.querySelector('.tabs__menu');

if (tabsMenu) {
  let tabsSelected = tabsMenu.querySelector('.tabs__selected');
  let tabsNav = tabsMenu.querySelector('.tabs__nav');
  let tabsItems = tabsMenu.querySelectorAll('.tabs__nav-btn');

  document.addEventListener('click', (e) => {
    if (e.target === tabsSelected) {
      tabsNav.classList.add('is-active')
      tabsSelected.classList.add('is-active')
      initDropdownTabsBtns()
    }
    else if (tabsNav.classList.contains('is-active')) {
      tabsNav.classList.remove('is-active')
      tabsSelected.classList.remove('is-active')
    }
  })

  function initDropdownTabsBtns() {
    tabsItems.forEach((tabsItem) => {
      tabsItem.addEventListener('click', (e) => {
        if (e.target === tabsItem) {
          console.log(e.target);
          tabsSelected.querySelector('.tabs__selected-item').textContent = e.target.textContent;
          tabsNav.classList.remove('is-active')
          tabsSelected.classList.remove('is-active')
        }
      })
    })
  }
}



