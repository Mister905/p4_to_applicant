import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "./Header";
import HeaderBody from "./HeaderBody";
import HeaderContact from "./HeaderContact";
import Body from "./Body";
import Signature from "./Signature";
import Footer from "./Footer";

const styles = StyleSheet.create({
  document: {
    backgroundColor: "white",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    fontWeight: "light",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  smallTopBuffer: {
    marginTop: 2,
  },
  mediumTopBuffer: {
    marginTop: 6,
  },
  largeTopBuffer: {
    marginTop: 10,
  },
  veryLargeTopBuffer: {
    marginTop: 12,
  },
  body: {
    paddingVertical: 5,
    paddingHorizontal: 35,
  },
});

const P4_To_Applicant = (props) => {
  const {
    director_contact_first_name,
    director_contact_last_name,
    director_contact_title,
    adjutant_contact_form_of_address,
    adjutant_contact_first_name,
    adjutant_contact_last_name,
    adjutant_contact_title,
    current_date,
    disaster_number,
    fips_number,
    applicant_legal_name,
    applicant_agent_form_of_adddress,
    applicant_agent_first_name,
    applicant_agent_last_name,
    applicant_agent_title,
    applicant_mailing_line_1,
    applicant_mailing_city,
    applicant_mailing_state,
    applicant_mailing_zip_code,
    applicant_agent_name_prefix,
    pa_liaison_contact_first_name,
    pa_liaison_contact_last_name,
    pa_liaison_contact_phone_business,
    pa_liaison_contact_email,
    program_manager_first_name,
    program_manager_last_name,
    program_manager_title,
    program_manager_initials,
    pa_liaison_contact_initials,
    applicant_county,
    tema_region,
  } = props.data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          director_contact_first_name={director_contact_first_name}
          director_contact_last_name={director_contact_last_name}
          director_contact_title={director_contact_title}
          adjutant_contact_form_of_address={adjutant_contact_form_of_address}
          adjutant_contact_first_name={adjutant_contact_first_name}
          adjutant_contact_last_name={adjutant_contact_last_name}
          adjutant_contact_title={adjutant_contact_title}
        />
        <HeaderBody
          current_date={current_date}
          disaster_number={disaster_number}
          fips_number={fips_number}
          applicant_legal_name={applicant_legal_name}
        />

        <HeaderContact
          applicant_agent_form_of_adddress={applicant_agent_form_of_adddress}
          applicant_agent_first_name={applicant_agent_first_name}
          applicant_agent_last_name={applicant_agent_last_name}
          applicant_agent_title={applicant_agent_title}
          applicant_mailing_line_1={applicant_mailing_line_1}
          applicant_mailing_city={applicant_mailing_city}
          applicant_mailing_state={applicant_mailing_state}
          applicant_mailing_zip_code={applicant_mailing_zip_code}
        />

        <Body
          applicant_agent_name_prefix={applicant_agent_name_prefix}
          applicant_agent_last_name={applicant_agent_last_name}
          pa_liaison_contact_first_name={pa_liaison_contact_first_name}
          pa_liaison_contact_last_name={pa_liaison_contact_last_name}
          pa_liaison_contact_phone_business={pa_liaison_contact_phone_business}
          pa_liaison_contact_email={pa_liaison_contact_email}
          disaster_number={disaster_number}
        />

        <Signature
          program_manager_first_name={program_manager_first_name}
          program_manager_last_name={program_manager_last_name}
          program_manager_title={program_manager_title}
          program_manager_initials={program_manager_initials}
          pa_liaison_contact_initials={pa_liaison_contact_initials}
          applicant_county={applicant_county}
          tema_region={tema_region}
        />

        <Footer />
      </Page>
    </Document>
  );
};

export default P4_To_Applicant;
