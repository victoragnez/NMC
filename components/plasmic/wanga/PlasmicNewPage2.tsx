// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: F-aAxuh8k_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_wanga.module.css"; // plasmic-import: pGUwLaFPdGtokmdZ3W7Ccj/projectcss
import * as sty from "./PlasmicNewPage2.module.css"; // plasmic-import: F-aAxuh8k_/css

export type PlasmicNewPage2__VariantMembers = {};

export type PlasmicNewPage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage2__VariantsArgs;
export const PlasmicNewPage2__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage2__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage2__ArgsType;
export const PlasmicNewPage2__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage2__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultNewPage2Props {
  dataFetches: PlasmicNewPage2__Fetches;
}

function PlasmicNewPage2__RenderFunc(props: {
  variants: PlasmicNewPage2__VariantsArgs;
  args: PlasmicNewPage2__ArgsType;
  overrides: PlasmicNewPage2__OverridesType;
  dataFetches?: PlasmicNewPage2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"497922"}</title>
        <meta key="og:title" property="og:title" content={"497922"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            loading={"lazy" as const}
            src={"/plasmic/wanga/images/_4979222Page001Jpg.jpeg"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage2__VariantsArgs;
    args?: PlasmicNewPage2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNewPage2__Fetches;
  } & Omit<PlasmicNewPage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNewPage2__ArgProps,
      internalVariantPropNames: PlasmicNewPage2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNewPage2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage2";
  } else {
    func.displayName = `PlasmicNewPage2.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage2 = Object.assign(
  // Top-level PlasmicNewPage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage2
    internalVariantProps: PlasmicNewPage2__VariantProps,
    internalArgProps: PlasmicNewPage2__ArgProps
  }
);

export default PlasmicNewPage2;
/* prettier-ignore-end */
