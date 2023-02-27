import styled from "styled-components";

import { ArrowDownIcon, ArrowUpIcon } from "@/components/Icons";

export const Details = styled.details`
  summary {
    font-size: ${({ theme }) => theme.fontSizes.medium_30};
    list-style: none;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  ul {
    padding-top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }
`;
