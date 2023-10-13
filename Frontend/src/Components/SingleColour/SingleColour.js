// MUI //
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const SingleColour = ({ colour, border, setcolours, colours }) => {
  let colourFound = colours?.find((item) => {
    return item == colour;
  });

  // Handle Colour Add/Remove //
  function handleColourAdd(Colour) {
    let colourFound = colours?.find((item) => {
      return item === Colour;
    });

    if (colourFound) {
      let newColours = colours.filter((item) => {
        return item !== Colour;
      });
      setcolours(newColours);
    } else {
      setcolours((prevState) => {
        return [...prevState, Colour];
      });
    }
  }
  
  return (
    <Box sx={{ width: "30%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            handleColourAdd(colour);
          }}
          sx={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            backgroundImage:
              colour == "Multi"
                ? `linear-gradient(90deg, 
                rgba(2,0,36,1) 0%, 
                rgba(68,68,117,1) 23%, 
                rgba(0,212,255,1) 50%, 
                rgba(255,0,0,1) 75%, 
                rgba(255,255,0,1) 100%)`
                : `null`,
            backgroundColor: `${colour}`,
            border: `${border ? "1px solid gray" : null}`,
            cursor: "pointer",
            position: "relative",
          }}
        >
          {colourFound ? (
            <Box
              sx={{
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DoneIcon
                sx={{
                  color: "olive",
                }}
              />
            </Box>
          ) : null}
        </Box>
        <Box>{colour}</Box>
      </Box>
    </Box>
  );
};

export default SingleColour;
