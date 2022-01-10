import '../flutter_flow/flutter_flow_theme.dart';
import '../flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class WidgetsWidget extends StatefulWidget {
  const WidgetsWidget({Key key}) : super(key: key);

  @override
  _WidgetsWidgetState createState() => _WidgetsWidgetState();
}

class _WidgetsWidgetState extends State<WidgetsWidget> {
  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      backgroundColor: FlutterFlowTheme.tertiaryColor,
      body: SafeArea(
        child: Align(
          alignment: AlignmentDirectional(0, 0),
          child: Container(
            width: MediaQuery.of(context).size.width * 10,
            height: 100,
            decoration: BoxDecoration(
              color: FlutterFlowTheme.tertiaryColor,
            ),
            child: Text(
              'Coming soon :)',
              textAlign: TextAlign.center,
              style: FlutterFlowTheme.title1,
            ),
          ),
        ),
      ),
    );
  }
}
