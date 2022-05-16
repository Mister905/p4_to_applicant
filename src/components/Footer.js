import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    marginTop: "auto",
    borderTop: "1px solid red",
    color: "#d4d4d4",
    fontSize: 8,
  },
  smallTopBuffer: {
    marginTop: 2,
  },
});
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.smallTopBuffer}>
        Mitigation and Recovery Division • 3041 Sidco Drive • Nashville, TN
        37204-1502
      </Text>
      <Text style={styles.smallTopBuffer}>
        Tel: 615-741-0001 • Fax: 615-242-4770 • tn.gov/tema
      </Text>
    </View>
  );
};

export default Footer;
