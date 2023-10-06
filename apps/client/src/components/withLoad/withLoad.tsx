import { type ComponentType } from "react"

type Props = {
    Component: ComponentType
}

type ReturnedComponentProps = {
    isLoading: boolean;
}

export function withLoading({ Component }: Props) {
    return function WithLoadingComponent({ isLoading, ...props }: ReturnedComponentProps) {
        if (!isLoading) return <Component {...props} />
        return <p>Fetching data....</p>
    }
}