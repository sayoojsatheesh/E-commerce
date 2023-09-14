// CSS //
import classes from './Categories.module.css'

const CategoriesContainer = (Props) => {
  return (
    <div className={classes.MainContainer}>
      <img className={classes.Image} alt='CategoriesImage' src={Props.imagePath} />
      <button className={classes.button}>{Props.buttonText}</button>
    </div>
  );
};

export default CategoriesContainer;
