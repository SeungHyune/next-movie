"use client"

import { useRouter } from "next/navigation"
import Button from "@/app/_components/Button/Button"

interface BackButtonProps {
  children: React.ReactNode
}

const BackButton = ({ children }: BackButtonProps) => {
  const router = useRouter()

  return (
    <Button
      width="20rem"
      height="5rem"
      borderRadius="5rem"
      fontWeight={600}
      onClick={() => router.back()}
    >
      {children}
    </Button>
  )
}

export default BackButton
