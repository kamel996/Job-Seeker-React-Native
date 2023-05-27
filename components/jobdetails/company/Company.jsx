import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri:
              companyLogo != null
                ? companyLogo
                : "https://api.logo.com/api/v2/images?logo=logo_20ddb280-003c-4d7b-816a-46942239b73e&format=webp&margins=0&quality=60&width=500&background=transparent&u=1685183699",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
