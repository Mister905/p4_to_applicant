import React from "react";
import { Text, Image, View, StyleSheet } from "@react-pdf/renderer";
import logo from "../logo/tnem.png";

const styles = StyleSheet.create({
  document: {
    backgroundColor: "white",
  },
  logoSection: {
    marginBottom: 20,
  },
  logo: {
    width: "33%",
  },
  smallTopBuffer: {
    marginTop: 2,
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    color: "rgb(52, 69, 156)",
    paddingHorizontal: 20,
  },
  headerTitleRight: {
    marginLeft: "auto",
  },
});
const Header = ({
  director_contact_first_name,
  director_contact_last_name,
  director_contact_title,
  adjutant_contact_form_of_address,
  adjutant_contact_first_name,
  adjutant_contact_last_name,
  adjutant_contact_title,
}) => {
  return (
    <View>
      <View style={styles.logoSection}>
        <Image alt="TNEM logo" src={logo} style={styles.logo} />
      </View>
      <View style={styles.logoSection}></View>
      <View style={styles.headerTitle}>
        <View>
          <Text style={styles.smallTopBuffer}>
            {director_contact_first_name} {director_contact_last_name}
          </Text>
          <Text style={styles.smallTopBuffer}>{director_contact_title}</Text>
        </View>
        <View style={styles.headerTitleRight}>
          <Text style={styles.smallTopBuffer}>
            {adjutant_contact_form_of_address}
          </Text>
          <Text style={styles.smallTopBuffer}>
            {adjutant_contact_first_name} {adjutant_contact_last_name}
          </Text>
          <Text style={styles.smallTopBuffer}>{adjutant_contact_title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
