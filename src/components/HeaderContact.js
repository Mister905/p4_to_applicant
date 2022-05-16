import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: "40px",
  },

  headerContact: {
    paddingVertical: 5,
    paddingHorizontal: 35,
  },
});
const HeaderContact = ({
  applicant_agent_form_of_adddress,
  applicant_agent_first_name,
  applicant_agent_last_name,
  applicant_agent_title,
  applicant_mailing_line_1,
  applicant_mailing_city,
  applicant_mailing_state,
  applicant_mailing_zip_code,
}) => {
  return (
    <View style={styles.headerContact}>
      <Text>
        {applicant_agent_form_of_adddress} {applicant_agent_first_name}{" "}
        {applicant_agent_last_name}
      </Text>
      <Text>{applicant_agent_title}</Text>
      <Text>{applicant_mailing_line_1}</Text>
      <Text>
        {applicant_mailing_city}, {applicant_mailing_state},{" "}
        {applicant_mailing_zip_code}
      </Text>
    </View>
  );
};

export default HeaderContact;
