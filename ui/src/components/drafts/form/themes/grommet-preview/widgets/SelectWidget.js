import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";

const SelectWidget = function(props) {
  return (
    <Box key={props.id} flex={true} pad="none">
      <Paragraph margin="small" size="small">
        {props.value || ""}
      </Paragraph>
    </Box>
  );
};

SelectWidget.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.object,
  placeholder: PropTypes.string
};

export default SelectWidget;
