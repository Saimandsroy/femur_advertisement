import Image, { type ImageProps } from "next/image"

type Props = Omit<ImageProps, "placeholder"> & {
  rounded?: boolean
}

export default function OptimizedImage({
  alt,
  className = "",
  rounded = false,
  sizes = "100vw",
  priority = false,
  ...rest
}: Props) {
  return (
    <Image
      alt={alt}
      className={`${rounded ? "rounded-md" : ""} ${className}`}
      sizes={sizes}
      priority={priority}
      {...rest}
    />
  )
}
