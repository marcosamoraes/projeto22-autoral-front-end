import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="w-full border-t-2 p-2 md:p-5 text-xs flex justify-center">
      Desenvolvido com &nbsp; <AiFillHeart className="text-red-500 mt-1" />
      &nbsp; por &nbsp;
      <a href="https://deliveryup.com.br" target="_blank" rel="noreferrer">
        <b>Delivery UP</b>
      </a>
    </footer>
  )
}
