const findBlockByAllias = (allias) =>{
  return $(".reviews__item").filter((ndx, item) =>{
    return $(item).attr("data-linked-with") == allias
  });
};








$('.interactive__avatar-link').click((e) =>{
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAllias(target);
  const currentItem = $this.closest('.interactive__avatar');
  itemToShow.addClass("active").siblings().removeClass("active");

  currentItem.addClass("active").siblings().removeClass("active");
})