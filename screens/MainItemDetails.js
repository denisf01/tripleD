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
  VStack,
  Button,
} from "native-base";
import { ScrollView } from "native-base";
import Slideshow from "react-native-image-slider-show";
import AppBar from "../components/AppBar";
import { StyleSheet, View } from "react-native";

const MainItemDetail = (props) => {
  return (
    <View style={styles.main}>
      <AppBar navigation={props.navigation} />
      <ScrollView>
        <VStack space={1}>
          <Slideshow
            scrollEnabled={false}
            dataSource={[
              { url: "http://placeimg.com/640/480/any" },
              { url: "http://placeimg.com/640/480/any" },
              { url: "http://placeimg.com/640/480/any" },
            ]}
          />
          <Box alignItems="center">
            <Box
              maxW="100%"
              width={"95%"}
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Description
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: "violet.500",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    {props.route.params.category}
                  </Text>
                </Stack>
                <Text fontWeight="400">{props.route.params.description}</Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center"></HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
          <Box alignItems="center">
            <Box
              maxW="100%"
              width={"95%"}
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Price
                  </Heading>
                </Stack>
                <Text fontWeight="400">${props.route.params.price}</Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center"></HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>

          <Button style={styles.button}>Add to Cart</Button>
        </VStack>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    margin: 15,
  },
});
export default MainItemDetail;
