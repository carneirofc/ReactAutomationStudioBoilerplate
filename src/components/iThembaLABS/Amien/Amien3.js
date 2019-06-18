import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import EpicsBinaryOutDebug from '../../../automation-studio/src/components/GroupedComponents/EpicsBinaryOutDebug';
import EpicsAnalogOutDebug from '../../../automation-studio/src/components/GroupedComponents/EpicsAnalogOutDebug';
import EpicsMbboDebug from '../../../automation-studio/src/components/GroupedComponents/EpicsMbboDebug';
import TextUpdate from '../../../automation-studio/src/components/BaseComponents/TextUpdate';
import TextInput from '../../../automation-studio/src/components/BaseComponents/TextInput';
import TextOutput from '../../../automation-studio/src/components/BaseComponents/TextOutput';
import Meter from '../../../automation-studio/src/components/BaseComponents/Gauge';
import SimpleSlider from '../../../automation-studio/src/components/BaseComponents/SimpleSlider';
import GraphMultiplePVs from '../../../automation-studio/src/components/BaseComponents/GraphMultiplePVs';
import SelectionList from '../../../automation-studio/src/components/BaseComponents/SelectionList';
import StyledIconIndicator from '../../../automation-studio/src/components/BaseComponents/StyledIconIndicator';

import Grid from '@material-ui/core/Grid';
import DataConnection from '../../../automation-studio/src/components/SystemComponents/DataConnection';

import SwitchComponent from '../../../automation-studio/src/components/BaseComponents/SwitchComponent';
import SelectionInput from '../../../automation-studio/src/components/BaseComponents/SelectionInput';
import ToggleButton from '../../../automation-studio/src/components/BaseComponents/ToggleButton';
import ActionButton from '../../../automation-studio/src/components/BaseComponents/ActionButton';
import ArrowButton from '../../../automation-studio/src/components/BaseComponents/ArrowButton';
import ThumbWheel from '../../../automation-studio/src/components/BaseComponents/ThumbWheel';
import ControlRightEx1 from '../../../automation-studio/src/components/ControlScreens/GridComponents/ControlRightEx1'
import ControlTopEx1 from '../../../automation-studio/src/components/ControlScreens/GridComponents/ControlTopEx1'
import ControlBottomEx1 from '../../../automation-studio/src/components/ControlScreens/GridComponents/ControlBottomEx1'
import Card from '@material-ui/core/Card';
import SideBar from '../../../automation-studio/src/components/SystemComponents/SideBar';
import AppBar from '@material-ui/core/AppBar';








const styles = theme => ({
  root: {
    padding: 0,
    spacing: 0,
    direction: 'row',
    alignItems: 'stretch',
    justify: "flex-start",
    overflowX: "hidden",
    overflowY: "hidden",
  },

});
class Amien3 extends React.Component {


  render() {
     const {classes}=this.props;
    //  console.log("state: ",this.state);

    return (
      <React.Fragment>
        <SideBar/>

        <Grid   container className={classes.root} style={{padding:16}}>
         <Grid item xs={12}>
           <Grid
             container
             spacing={2}
             alignItems={'stretch'}
             direction={'column'}
             justify={'flex-start'}
           >
          <Grid item >
               <Grid container direction="row" item justify="center" spacing={2} alignItems="stretch">
                  <Grid item xs={4}  >
                     <div> Hello World 1</div>
                 </Grid>
                 <Grid item xs={4}  >
                   <TextInput  pv='pva://$(device):amplitude' macros={{'$(device)':'testIOC'}}   usePvLabel={true} usePrecision={true} prec={3} alarmSensitive={true}/>
                 </Grid>
                 <Grid item  xs={4}>
                   <TextOutput  pv='pva://$(device):test3' macros={{'$(device)':'testIOC'}}   usePvLabel={true} usePrecision={true} prec={3} alarmSensitive={true}/>
                 </Grid>
                 <Grid item  xs={4}>
                   <TextOutput  pv='pva://$(device):test3' macros={{'$(device)':'testIOC'}}   usePvLabel={true} usePrecision={true} prec={3} alarmSensitive={true}/>
                 </Grid>
                 <Grid item  xs={4}>
                   <TextOutput  pv='pva://$(device):test3' macros={{'$(device)':'testIOC'}}   usePvLabel={true} usePrecision={true} prec={3} alarmSensitive={true}/>
                 </Grid>
                 <Grid item  xs={4}>
                   <TextOutput  pv='pva://$(device):test3' macros={{'$(device)':'testIOC'}}   usePvLabel={true} usePrecision={true} prec={3} alarmSensitive={true}/>
                 </Grid>
               </Grid>
             </Grid>
          </Grid>
          </Grid>
          </Grid>
      </React.Fragment>
    );
  }
}

Amien3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,{withTheme:true})(Amien3);
//export default Amien3;
