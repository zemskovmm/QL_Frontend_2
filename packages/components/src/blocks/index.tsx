import React from 'react';
import {BasicHtmlBlockInfo} from "./basic-html";
import {CirclesBlockInfo} from "./circles";
import {BlockTypeInfo} from "./blocks-info";

export const AvailableBlocks: BlockTypeInfo[] = [
  CirclesBlockInfo,
  BasicHtmlBlockInfo,
]

export function findBlockInfo(blockType: string): BlockTypeInfo | null {
  for (var info of AvailableBlocks)
    if (info.id == blockType)
      return info;
  return null;
}

export const BlockPresenter = (props: { blockType: string, blockData: any }) => {
  const info = findBlockInfo(props.blockType);
  if (info == null)
    return <div>Unknown block type: {props.blockType}</div>
  const Renderer = info.renderer;
  return <Renderer {...props.blockData}/>
}
