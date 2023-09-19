// CSS//
import classes from "./FooterList.module.css";

const FooterList = (props) => {
  return (
    <>
      {props.Heading ? (
        <h4 style={{ color: "white", paddingLeft: "1rem" }}>{props.Heading}</h4>
      ) : null}
      <div style={{ display: props.screen ? "flex" : null }}>
        {props.list.map((item) => (
          <h5 key={Math.random()} className={classes.h4}>
            {item}
          </h5>
        ))}
      </div>
    </>
  );
};

export default FooterList;
