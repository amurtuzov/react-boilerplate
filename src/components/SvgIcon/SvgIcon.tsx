import { FC, SVGProps, useEffect, useRef, useState } from 'react'

type SvgIconProps = {
  iconName: string
  svgProp?: React.SVGProps<SVGSVGElement>
  className?: string
}

const SvgIcon = (props: SvgIconProps) => {
  const [isLoadingSvg, setLoading] = useState(false)
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | null>(null)
  const importSvg = async (svgName: string) => {
    if (svgName) {
      return (await import(`../../assets/icons/${svgName}.svg`)).ReactComponent
    }
  }

  useEffect(() => {
    const updateSvg = async () => {
      setLoading(true)
      try {
        ImportedIconRef.current = await importSvg(props.iconName)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    updateSvg()
  }, [props.iconName])

  if (!isLoadingSvg && ImportedIconRef.current) {
    const { current: SvgIcon } = ImportedIconRef
    return <SvgIcon className={props.className} {...props.svgProp} />
  }
}

export default SvgIcon
