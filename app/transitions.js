export default function(){
  this.transition(
    this.toRoute('listings'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 900 })
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(true),
    this.use('toRight')
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(false),
    this.use('toLeft')
  );
}
