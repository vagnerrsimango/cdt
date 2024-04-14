import Link from "next/link"
import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="container inset-x-0 bottom-0">
      <div className="flex justify-center">
        <div className="self-end pb-1">
          <div className="flex items-end text-sm">
            <Copyright height={17} width={17} />
            <Link
              href="https://vae.io/"
              target="_blank"
              className="hidden sm:inline"
            >
              &nbsp;
              <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
                VAE.IO
              </span>
            </Link>
            &nbsp; {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </footer>
  )
}
