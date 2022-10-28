import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>


      </ImageContainer>

    <p>Uhuul <strong>Tomás Franco</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.</p>

    <Link href="/">
      Voltar ao catálogo
    </Link>
    </SuccessContainer>
  )
}