import { useState } from "react";
import { Text, ScrollView, SafeAreaView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("")

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.promages} dimension="100%" />
          ),
          headerTitle: ''
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome
          searchText={searchText}
          setSearchText={setSearchText}
          handleClick={() => {
            if(searchText){
              router.push(`/search/${searchText}`)
            }
          }}
          />

          <Popularjobs />
          <Nearbyjobs />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
