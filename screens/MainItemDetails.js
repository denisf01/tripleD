import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Center,
  AspectRatio,
  Image,
  Stack,
  Heading,
  Pressable,
} from "native-base";

const MainItemDetail = (props) => {
  return <Text>{props.route.params.id}</Text>;
};

export default MainItemDetail;
