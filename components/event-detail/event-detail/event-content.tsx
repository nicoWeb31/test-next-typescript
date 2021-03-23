import classes from './event-content.module.scss';

function EventContent(props:any) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
