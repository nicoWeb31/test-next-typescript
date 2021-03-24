import classes from './error-alert.module.scss';

interface ErrorAlertProps{
  children: React.ReactNode;
  alert: string | null;
}


const ErrorAlert: React.FC<ErrorAlertProps> = ({ children, alert}) => {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
