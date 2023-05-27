import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const PopularJobCard = ({job , handleNavigate }) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri:
              job.employer_logo != null
                ? job.employer_logo
                : "https://api.logo.com/api/v2/images?logo=logo_20ddb280-003c-4d7b-816a-46942239b73e&format=webp&margins=0&quality=60&width=500&background=transparent&u=1685183699",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
