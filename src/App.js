import React from "react";
import P4_To_Applicant from "./components/P4_To_Applicant";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

import p4_to_applicant_data from "./p4_to_applicant.data";


const styles = StyleSheet.create({
  viewer: {
    height: "100vh",
    width: "100vw",
  },
});

const App = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <P4_To_Applicant data={p4_to_applicant_data} />
    </PDFViewer>
  );
};

export default App;
