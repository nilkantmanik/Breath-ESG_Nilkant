
  import { DetailsList, IDetailsListProps,Icon,IColumn,Label } from "@fluentui/react";
  import * as React from "react";
  // import { strings } from "../../loc/strings";
  
  interface PaginationdetailListDetaillistProps
    extends Omit<Omit<IDetailsListProps, "items">, "columns"> {
    columns: IColumn[];
  }
  
  interface IPropsPaginationDetailList {
    DetailListProps: PaginationdetailListDetaillistProps;
    items: any[];
    DetaillistKey?: string;
  }
  
  const DetailList: React.FunctionComponent<IPropsPaginationDetailList> = ({
    DetailListProps,
    items,
    DetaillistKey,
  }) => {

  
    return (
      <>
        <DetailsList
          checkButtonAriaLabel={"select row"}
          setKey={"items"}
          key={DetaillistKey}
          {...(DetailListProps as any)}
          items={items}
        />
  
      </>
    );
  };
  
  export default DetailList;
  