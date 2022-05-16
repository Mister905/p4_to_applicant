import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingVertical: 5,
    paddingHorizontal: 35,
  },
  mb10: {
    marginBottom: "10px",
  },
});
const Signature = ({
  program_manager_first_name,
  program_manager_last_name,
  program_manager_title,
  program_manager_initials,
  pa_liaison_contact_initials,
  applicant_county,
  tema_region,
}) => {
  return (
    <View style={styles.body}>
      <View>
        <Text>
          {program_manager_first_name} {program_manager_last_name}
        </Text>
      </View>
      <View style={styles.mb10}>
        <Text>{program_manager_title}</Text>
      </View>
      <View style={styles.mb10}>
        <Text>
          {program_manager_initials}:{pa_liaison_contact_initials}
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>Enclosure (as Stated)</Text>
      </View>

      <View style={styles.mb10}>
        <Text>Enclosure (as Stated)</Text>
      </View>

      <View style={styles.mb10}>
        <Text>
          cc: {applicant_county} County EMA Director 
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>
        {tema_region} Tennesse Regional Administrator
        </Text>
      </View>
    </View>
  );
};

export default Signature;
