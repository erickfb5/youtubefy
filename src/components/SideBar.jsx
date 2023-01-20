import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";
const categoryMatch = (category) => category.name === selectedCategory
const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: {
          md: "column",
        },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            background: categoryMatch(category) && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: categoryMatch(category) ? "white" : "red",
              marginRight: '15px'
            }}
          >
            {category.icon}
          </span>
          <span
           style={{
            opacity: categoryMatch(category) ? "1" : "0.8",
            marginRight: '15px'
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;