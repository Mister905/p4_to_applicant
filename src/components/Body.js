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

const Body = ({
  applicant_agent_name_prefix,
  applicant_agent_last_name,
  pa_liaison_contact_first_name,
  pa_liaison_contact_last_name,
  pa_liaison_contact_phone_business,
  pa_liaison_contact_email,
  disaster_number,
}) => {
  return (
    <View style={styles.body}>
      <View style={styles.mb10}>
        <Text>
          Dear {applicant_agent_name_prefix} {applicant_agent_last_name}:
        </Text>
      </View>

      <View>
        <Text style={styles.mb10}>
          Please find enclosed a Project Completion and Certification Report
          (P.4) for your review and signature. The P.4 lists all the projects
          and funding awarded to you for FEMA reimbursement subsequent to
          Disaster
          {disaster_number}. Fill in the 'Actual Date Completed' and the 'Amount
          Claimed by Applicant' blocks for each project listed on the P.4 and
          sign as the 'Applicant's Authorized Representative' on the last page.
        </Text>
      </View>

      <View>
        <Text style={styles.mb10}>
          We are encouraging return of the P.4 via email to your Public
          Assistance Specialist noted at the end of this letter. You may also
          mail it to the address in the footer of this letterhead.
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>
          Once we receive the completed P.4, TEMA will forward the closeout to
          the Federal Emergency Management Agency (FEMA). FEMA's review on
          Applicant Closure is usually within a few weeks. We will provide you
          with their closeout package when received.
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>
          If you have any questions, please contact your Public Assistance
          Specilist, {pa_liaison_contact_first_name}{" "}
          {pa_liaison_contact_last_name}, at {pa_liaison_contact_phone_business}{" "}
          or {pa_liaison_contact_email}
        </Text>
      </View>

      <View style={styles.mb10}>
        <Text>Sincerely,</Text>
      </View>
    </View>
  );
};

export default Body;
