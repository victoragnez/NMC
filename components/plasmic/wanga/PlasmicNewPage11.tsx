// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: L0OHvr7KIJ
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
import * as sty from "./PlasmicNewPage11.module.css"; // plasmic-import: L0OHvr7KIJ/css

export type PlasmicNewPage11__VariantMembers = {};

export type PlasmicNewPage11__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage11__VariantsArgs;
export const PlasmicNewPage11__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage11__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage11__ArgsType;
export const PlasmicNewPage11__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage11__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultNewPage11Props {
  dataFetches: PlasmicNewPage11__Fetches;
}

function PlasmicNewPage11__RenderFunc(props: {
  variants: PlasmicNewPage11__VariantsArgs;
  args: PlasmicNewPage11__ArgsType;
  overrides: PlasmicNewPage11__OverridesType;
  dataFetches?: PlasmicNewPage11__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"498137"}</title>
        <meta key="og:title" property="og:title" content={"498137"} />
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
            loading={"eager" as const}
            src={"/plasmic/wanga/images/_498137Page0011Jpg.jpeg"}
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
  PlasmicNewPage11__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage11__VariantsArgs;
    args?: PlasmicNewPage11__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNewPage11__Fetches;
  } & Omit<PlasmicNewPage11__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage11__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewPage11__ArgProps,
      internalVariantPropNames: PlasmicNewPage11__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNewPage11__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage11";
  } else {
    func.displayName = `PlasmicNewPage11.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage11 = Object.assign(
  // Top-level PlasmicNewPage11 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage11
    internalVariantProps: PlasmicNewPage11__VariantProps,
    internalArgProps: PlasmicNewPage11__ArgProps
  }
);

export default PlasmicNewPage11;
/* prettier-ignore-end */
