export default function(){
  this.transition(
    this.toRoute('listings'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 900 })
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(true),
    this.use('toLeft')
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(false),
    this.use('toRight')
  );
}
