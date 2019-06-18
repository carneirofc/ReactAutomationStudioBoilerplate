import React from 'react'

import AutomationStudioContext from '../../../../automation-studio/src/components/SystemComponents/AutomationStudioContext';
import TextInput from '../../../../automation-studio/src/components/BaseComponents/TextInput';
import SelectionInput from '../../../../automation-studio/src/components/BaseComponents/SelectionInput';
import TextOutput from '../../../../automation-studio/src/components/BaseComponents/TextOutput';
import SimpleSlider from '../../../../automation-studio/src/components/BaseComponents/SimpleSlider';
import TextUpdate from '../../../../automation-studio/src/components/BaseComponents/TextUpdate';
import Grid from '@material-ui/core/Grid';
import SwitchComponent from '../../../../automation-studio/src/components/BaseComponents/SwitchComponent';
import ToggleButton from '../../../../automation-studio/src/components/BaseComponents/ToggleButton';
import ActionButton from '../../../../automation-studio/src/components/BaseComponents/ActionButton';
import ArrowButton from '../../../../automation-studio/src/components/BaseComponents/ArrowButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import MyWindowPortal from '../../../../automation-studio/src/components/SettingsPages/MyWindowPortal';

//import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  body1: theme.typography.body1,


});

class ControlRightSinglePS extends React.Component {
  constructor(props) {
    super(props);
    this.state={'showSettings':false}

  }


  handleSettingsButtonClick=()=>{
    this.setState({'showSettings':true});
  }

  render() {
    const system=this.props.system;
    console.log("json stringify",JSON.stringify(system))
    const {classes}= this.props;

    return (

      <div className={classes.body1} style={{ paddingRight: 12}}>

          {system.displayName}
          {/*<TextUpdate  pv='pva://$(device):Setpoint.NAME' macros={this.props['macros']}  />*/}



        <Card style={{ padding: 12}} >



          <Grid   container
            direction="row"
            justify="flex-start"
            alignItems="center" spacing={1}>
            <Grid item xs={6}  >
              <TextInput   pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint}     usePrecision={true} prec={3}  label={'Setpoint:'} alarmSensitive={true}  usePvUnits={true} usePvMinMax={true}/>

            </Grid>
            <Grid item xs={6}  >
              <TextOutput style={{marginRight:10}} pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.readback}        usePrecision={true} prec={3} usePvUnits={true} alarmSensitive={true} label={'Readback'}/>


            </Grid>

            <Grid item xs={6}  >

              <TextOutput  pv={'pva://'+system.devices.device.deviceName+":get-localRemote"}        usePvUnits={true} useStringValue={true} alarmSensitive={true} label={'Loc/Rem'} useStringSeverityMatch={true} StringSeverity={[{'stringMatch':'Local','severity':1}]}/>
            </Grid>
            <Grid item xs={6}  >
              <TextOutput  pv={'pva://'+system.devices.device.deviceName+":get-statusText"}        useStringValue={true} alarmSensitive={true} label={'Status'}  useStringSeverityMatch={true} StringSeverity={[{'stringMatch':'Fault','severity':2}]}/>
            </Grid>
            <Grid item xs={12}  >

            </Grid>
            <Grid item xs={4}  >

              <ToggleButton pv={'pva://'+system.devices.device.deviceName+":put-offOn"}  label={' On/Off'} labelPlacement={"end"} custom_selection_strings={["Off","On"]}/>



            </Grid>
            <Grid item xs={4}  >





            </Grid>
            <Grid item xs={4}  >

              <Button component={Link} to={{
                pathname: "/SettingsSinglePS",
                search:JSON.stringify(system),
                state: ["sdas"],
                data:"hello2"
              }} target="_blank" color="primary" variant='contained'>  Settings </Button>

            </Grid>





            <Grid item xs={12}  >
              <Grid   container  justify="flex-start" direction="row"    alignItems="center" spacing={1}>
                <Grid item xs={12} sm={12} >
                  <Grid   container  justify="flex-start" direction="row"    alignItems="center" spacing={1}>
                    <Grid item  sm={2}>


                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"100"} labelPlacement={"bottom"}
                          actionValue={+100} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-100} usePvMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} >
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"10"} labelPlacement={"bottom"}
                          actionValue={+10} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-10} usePvMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"1"} labelPlacement={"bottom"}
                          actionValue={+1} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-1} usePvMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.1"} labelPlacement={"bottom"}
                          actionValue={+0.1} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.1} usePvMinMax={true} />
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.01"} labelPlacement={"bottom"}
                          actionValue={+0.01} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.01} usePvMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.001"} labelPlacement={"bottom"}
                          actionValue={+0.001} usePvMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.001} usePvMinMax={true}/>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} >
              <SelectionInput  pv={'pva://'+system.devices.device.deviceName+':put-S&EImmed'} label={'Mode'} useStringValue={true}/>
            </Grid>
            <Grid item xs={6}  >
              <ActionButton pv={'pva://'+system.devices.device.deviceName+":put-enter"} macros={this.props['macros']}   actionValue={"1"}
                actionString={"Enter"}/>
            </Grid>

          </Grid>

        </Card>


      </div>


    );
  }
}

ControlRightSinglePS.contextType=AutomationStudioContext;
export default withStyles(styles,{withTheme:true})(ControlRightSinglePS)
