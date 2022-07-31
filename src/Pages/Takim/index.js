import React from 'react'
import ImagesList from "../../components/imagesList/ImagesList";
import Upload from "../../components/upload/Upload";
import { Container } from "@mui/material";
import AuthContext from "../../context/AuthContext";
import { useLocation, useParams } from 'react-router';



const TakimSayfasi = () => {
  const params = useParams()

  return (
    <div>
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
    <AuthContext>
      <Upload takim={params.takim} />
    <ImagesList takim={params.takim} />
    </AuthContext>
  </Container>
  </div>
  )
}


export default TakimSayfasi