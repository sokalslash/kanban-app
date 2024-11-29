import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .custom-select {
    &__control {
      cursor: pointer;
      border-color: ${colors.verylightGrey};

      &:hover {
        opacity: 0.4;
        border-color: ${colors.verylightGrey};
      }
    }
    &__control--menu-is-open {
      box-shadow: 0 0 0 1px ${colors.mainPurple};
    }
    &__control--is-focused {
      box-shadow: 0 0 0 1px ${colors.mainPurple};
    }
    &__value-container {
      font-size: 13px;
    }
    &__indicator {
      color: ${colors.mainPurple};
    }
    &__indicator-separator {
      width: 0;
    }
    &__menu {
      color: ${colors.mediumGrey};
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13px;
      padding: 16px;
      outline: none;
      box-shadow: 0 0 0 1px ${colors.mainPurple};
    }
  }
`
export const SelectLabel = styled.label`
  font-size: 12px;
  color: ${colors.mediumGrey};
  margin-bottom: 10px;
`
export const SelectOption = styled.option`
  color: ${colors.mediumGrey};
`
