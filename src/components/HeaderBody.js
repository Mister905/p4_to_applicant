import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerBody: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  smallTopBuffer: {
    marginTop: 2,
  },
  headerBodyRight: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
  },
  headerBodyRightLeft: {
    marginRight: 10,
  },
  headerBodyRightRight: {
    marginLeft: "auto",
  },
});

const HeaderBody = ({
  current_date,
  disaster_number,
  fips_number,
  applicant_legal_name,
}) => {
  return (
    <View style={styles.headerBody}>
      <View>
        <Text style={styles.smallTopBuffer}>{current_date}</Text>
      </View>
      <View style={styles.headerBodyRight}>
        <View style={styles.headerBodyRightRight}>
          <Text style={styles.smallTopBuffer}>
            RE: FEMA-{disaster_number}-DR-TN
          </Text>
          <Text style={styles.smallTopBuffer}>PA ID: {fips_number}</Text>
          <Text style={styles.smallTopBuffer}>
            Applicant: {applicant_legal_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderBody;
