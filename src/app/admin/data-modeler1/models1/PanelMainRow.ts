export interface PanelMainRow{
    rowIndex:number,
    columns:any[]
  }
export interface  PanelMainContainer{
  width:number,
  rows:PanelMainRow[],
  style?:ContainerStyle
}

export interface SideNavModel{
  dmog:any,
  type:any,
  data:any,
  props?:any,

}

export interface ContainerStyle{
container:any,
dmolabel:any,
header:any,


}
