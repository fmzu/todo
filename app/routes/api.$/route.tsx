import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare"
import { api } from "~/interface/api"

export const action: ActionFunction = (props) => {
  return api.fetch(props.request, props.context.cloudflare.env)
}

export const loader: LoaderFunction = (props) => {
  return api.fetch(props.request, props.context.cloudflare.env)
}
