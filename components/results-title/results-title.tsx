
import Button from '../ui/button/button';
import classes from './results-title.module.scss';
interface ResultTitleProps {
  date: Date;
  // children: React.ReactNode ;
}


const ResultsTitle: React.FC<ResultTitleProps>=({date})=> {


  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button refLink='/events'>Show alls events</Button>
    </section>
  );
}

export default ResultsTitle;
